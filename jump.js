export default function handler(req, res) {
  // 当目标服务器访问这个文件时，直接让它重定向到内网的 3306 端口
  res.redirect(302, 'http://127.0.0.1:3306');
}
