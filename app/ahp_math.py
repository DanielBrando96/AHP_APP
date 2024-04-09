from flask import Flask, render_template, request
import json
import numpy as np

app = Flask(__name__)

def calculate_eigenvector(matrix):
    eigenvalues, eigenvectors = np.linalg.eig(matrix)
    max_eigenvalue_index = np.argmax(eigenvalues)
    eigenvector = eigenvectors[:, max_eigenvalue_index]
    eigenvector /= np.sum(eigenvector)
    return eigenvector

def calculate_consistency_ratio(matrix):
    n = len(matrix)
    lambda_max = np.max(np.linalg.eigvals(matrix))
    consistency_index = (lambda_max - n) / (n - 1)
    random_indices = {1: 0, 2: 0, 3: 0.58, 4: 0.90, 5: 1.12, 6: 1.24, 7: 1.32, 8: 1.41, 9: 1.45, 10: 1.49, 11: 1.51, 12: 1.48, 13: 1.56, 14: 1.57, 15: 1.59}
    random_index = random_indices[n]
    consistency_ratio = consistency_index / random_index
    return consistency_ratio

@app.route('/calculate', methods=['GET', 'POST'])
def test():
    array = np.array(request.json['array'], dtype=float)
    eigen, cons_ratio = run_ahp(array)
    response = {'eigenvector': eigen.tolist(), 'consistensy_ratio': cons_ratio}
    return json.dumps(response)

def run_ahp(A):
    eigenvector = calculate_eigenvector(A)
    consistency_ratio = calculate_consistency_ratio(A)
    return eigenvector,consistency_ratio

@app.route('/')
def index():
    return render_template('index.html')

if __name__=='__main__':
    app.run(debug=True, port=5000)
