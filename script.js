// Initialize Chart.js for Workload visualization
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('workloadChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['จัดการเรียนรู้', 'งานสนับสนุน', 'พัฒนาตนเอง', 'งานตอบสนองนโยบาย'],
                datasets: [{
                    data: [15, 4, 3, 3], // Based on PA PDF hours (Total ~25)
                    backgroundColor: [
                        '#4361ee',
                        '#4cc9f0',
                        '#4895ef',
                        '#3f37c9'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            font: {
                                family: 'Sarabun'
                            }
                        }
                    }
                },
                cutout: '70%'
            }
        });
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Update active state
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
            
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});
