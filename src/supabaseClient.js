import { createClient } from '@supabase/supabase-js'

// 슈퍼베이스 대시보드에서 가져온 본인의 정보를 입력하세요
const supabaseUrl = 'https://cjxzmccvlfxhacyrcvnp.supabase.co'
const supabaseAnonKey = 'sb_publishable_UGrVMP78iYhzx8SPx1wNxg_JN0E4Kks'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)