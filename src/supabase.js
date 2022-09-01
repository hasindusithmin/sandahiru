
import {createClient} from "@supabase/supabase-js"

const supabase = createClient(process.env.REACT_APP_URL,process.env.REACT_APP_ANON)

export default supabase