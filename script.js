// 平滑滚动效果
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// 页面加载动画
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 1s ease';
    document.body.style.opacity = '1';
  }, 100);
});

// 荣誉部分动态显示效果
const honorsSection = document.getElementById('honors');
const observerOptions = {
  root: null,
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('li').forEach((li, index) => {
        setTimeout(() => {
          li.style.opacity = '1';
          li.style.transform = 'translateY(0)';
        }, index * 200);
      });
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

observer.observe(honorsSection);

// 初始化荣誉列表样式
document.querySelectorAll('#honors li').forEach(li => {
  li.style.opacity = '0';
  li.style.transform = 'translateY(20px)';
  li.style.transition = 'all 0.5s ease';
});

// 时间轴动态显示效果
const timelineSection = document.getElementById('education');
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.timeline-item').forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }, index * 300);
      });
      timelineObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

timelineObserver.observe(timelineSection);

// 初始化时间轴样式
document.querySelectorAll('.timeline-item').forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateX(-50px)';
  item.style.transition = 'all 0.8s ease';
});
