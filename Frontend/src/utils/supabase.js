import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://latssghdutdpkohrxtgu.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhdHNzZ2hkdXRkcGtvaHJ4dGd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NzU1MzAsImV4cCI6MjA3MTM1MTUzMH0.hgTuaEYjGazTrLZd0gcY_fGbR5RYFjB8cCVU0ZZM4uI'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  accessToken: () => {
    return Clerk.session?.getToken()
  },
})
export {supabase}