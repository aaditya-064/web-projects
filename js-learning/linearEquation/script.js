// x => protein
// y => energy
// z => fiber
// Maize => 10x+3300y+6z = 3100
// Soya => 46x + 2200y + 7z = 21
// B. Rice / Rice Polish => 8x + 3100y + 5z = 6

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('equations-form');
    form.addEventListener('submit', event => {
        event.preventDefault();

        const matrix = [];
        const formData = new FormData(form);
        for (let i = 1; i <= 3; i++) {
            const row = [
                parseFloat(formData.get(`a${i}`)),
                parseFloat(formData.get(`b${i}`)),
                parseFloat(formData.get(`c${i}`)),
                parseFloat(formData.get(`d${i}`))
            ];
            matrix.push(row);
        }

        const result = gaussianElimination(matrix);
        displaySolution(result);
    });

    function gaussianElimination(matrix) {
        const n = matrix.length;

        for (let i = 0; i < n; i++) {
            let maxEl = Math.abs(matrix[i][i]);
            let maxRow = i;
            for (let k = i + 1; k < n; k++) {
                if (Math.abs(matrix[k][i]) > maxEl) {
                    maxEl = Math.abs(matrix[k][i]);
                    maxRow = k;
                }
            }

            for (let k = i; k < n + 1; k++) {
                const tmp = matrix[maxRow][k];
                matrix[maxRow][k] = matrix[i][k];
                matrix[i][k] = tmp;
            }

            for (let k = i + 1; k < n; k++) {
                const c = -matrix[k][i] / matrix[i][i];
                for (let j = i; j < n + 1; j++) {
                    if (i === j) {
                        matrix[k][j] = 0;
                    } else {
                        matrix[k][j] += c * matrix[i][j];
                    }
                }
            }
        }

        const x = new Array(n);
        for (let i = n - 1; i >= 0; i--) {
            x[i] = matrix[i][n] / matrix[i][i];
            for (let k = i - 1; k >= 0; k--) {
                matrix[k][n] -= matrix[k][i] * x[i];
            }
        }

        return x;
    }

    function displaySolution(solution) {
        const solutionDiv = document.getElementById('solution');
        solutionDiv.innerHTML = `<h2>Solution</h2><p>${solution.map((x, i) => `x${i + 1} = ${x.toFixed(2)}`).join('<br>')}</p>`;
    }
});
