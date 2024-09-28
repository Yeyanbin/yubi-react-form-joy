
import { useRouter } from 'next/router';

const withGroup = (component, opt) => (props) => {
    const router = useRouter();
    const { user } = useAppContext(); // 检查用户是否登录的逻辑

    if (!user) {
      router.push('/login');
      return null;
    }
    preMount();

    return withLoading(<Component {...props} />);
  }