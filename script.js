// Memos API 地址
const MEMOS_API_URL = 'https://memo.aoe.me/api/v1/memos';

// 获取 Memos 数据并渲染
async function fetchAndRenderMemos() {
  try {
    const response = await fetch(MEMOS_API_URL);
    const memos = await response.json();
    const memosContainer = document.getElementById('memos-container');

    // 清空容器
    memosContainer.innerHTML = '';

    // 遍历 Memos 数据并渲染
    memos.forEach(memo => {
      const memoElement = document.createElement('div');
      memoElement.classList.add('memo');

      // Memo 头部
      const memoHeader = document.createElement('div');
      memoHeader.classList.add('memo-header');

      const avatar = document.createElement('img');
      avatar.src = 'https://via.placeholder.com/40'; // 默认头像
      avatar.alt = 'User Avatar';

      const username = document.createElement('span');
      username.classList.add('username');
      username.textContent = memo.creatorName || 'Shabby';

      const timestamp = document.createElement('span');
      timestamp.classList.add('timestamp');
      timestamp.textContent = new Date(memo.createdTs * 1000).toLocaleString();

      memoHeader.appendChild(avatar);
      memoHeader.appendChild(username);
      memoHeader.appendChild(timestamp);

      // Memo 内容
      const memoContent = document.createElement('div');
      memoContent.classList.add('memo-content');
      memoContent.textContent = memo.content;

      // Memo 操作按钮
      const memoActions = document.createElement('div');
      memoActions.classList.add('memo-actions');

      const likeButton = document.createElement('button');
      likeButton.textContent = '点赞';

      const replyButton = document.createElement('button');
      replyButton.textContent = '回复';

      const shareButton = document.createElement('button');
      shareButton.textContent = '分享';

      memoActions.appendChild(likeButton);
      memoActions.appendChild(replyButton);
      memoActions.appendChild(shareButton);

      // 将头部、内容和操作按钮添加到 Memo 卡片
      memoElement.appendChild(memoHeader);
      memoElement.appendChild(memoContent);
      memoElement.appendChild(memoActions);

      // 将 Memo 卡片添加到容器
      memosContainer.appendChild(memoElement);
    });
  } catch (error) {
    console.error('获取 Memos 数据失败:', error);
  }
}

// 页面加载时执行
window.onload = fetchAndRenderMemos;