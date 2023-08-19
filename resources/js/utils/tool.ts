// 判断路由path是不是/开头
export const slashStart = (path: string) => {
  if (path[0] != "/") {
    return `/${path}`;
  }
  return path;
};

// window是否存在，用来区分服务端和web端
export const windowExist = () => {
  if (typeof window === "undefined") {
    return false;
  }
  return true;
};
