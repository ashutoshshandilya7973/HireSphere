import React, { useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../utils/supabase';

const ClerkAuth = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return; // wait until user is loaded

    const fetchRole = async () => {
        console.log(user.id)
      const { data, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Error fetching the user role', error);
        return;
      }

      if (data?.role === 'hr') {
        navigate('/admin-dashboard');
      } else {
        navigate('/');
      }
    };

    fetchRole();
  }, [user, navigate]);

  return null;
};

export default ClerkAuth;
