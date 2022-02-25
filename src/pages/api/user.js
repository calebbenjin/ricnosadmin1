import { API_URL } from '@/lib/index';
import cookie from 'cookie';

const admin = async (req, res) => {
  if (req.method === 'GET') {
    if (!req.headers.cookie) {
      res.status(403).json({ message: 'Not Authorized' });
      return;
    }

    const { token } = cookie.parse(req.headers.cookie);

    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };


    const apiRes = await fetch(`${API_URL}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      },
    });

    const user = await apiRes.json();

    if (apiRes.ok) {
      res.status(200).json({ user });
    } else {
      res.status(403).json({ message: 'User forbidden' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default admin;
