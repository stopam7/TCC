// abre o modal
  document.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('editOrderModal').style.display = 'flex';
    });
  });

  // fecha ao clicar na seta
  document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('editOrderModal').style.display = 'none';
  });

  // fecha ao clicar fora
  window.addEventListener('click', (e) => {
    const modal = document.getElementById('editOrderModal');
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });