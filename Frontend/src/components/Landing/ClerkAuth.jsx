import React, { useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../utils/supabase';
import useUserStore from '../../stores/useUserStore';
const ClerkAuth = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const {id,setId}=useUserStore()

  useEffect(() => {
    if (!user) return; // wait until user is loaded

    const fetchRole = async () => {
        console.log(user.id)
      const { data, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('user_id', user.id)
        .single();

      if (error) {
        console.error('Error fetching the user role', error);
        return;
      }

      if (data?.role === 'hr') {
  if (user.id !== id) setId(user.id);
        navigate('/admin-dashboard');
      } else {
  if (user.id !== id) setId(user.id);
        navigate('/');
      }
    };

    fetchRole();
  }, [user, navigate]);

  return null;
};

export default ClerkAuth;
