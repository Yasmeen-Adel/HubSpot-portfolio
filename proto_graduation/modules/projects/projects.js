{% if not is_in_editor %}
<script>
document.addEventListener('DOMContentLoaded', () => {
  // Open modal
  document.querySelectorAll('.view-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.getElementById('modal-' + btn.dataset.id);
      if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
  });
  
  // Close modal via close button
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.project-modal').style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  });
  
  // Close modal via clicking outside
  document.querySelectorAll('.project-modal').forEach(modal => {
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  });
  
  // Close modal with ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.project-modal').forEach(modal => {
        if (modal.style.display === 'flex') {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
        }
      });
    }
  });
});
</script>
{% endif %}