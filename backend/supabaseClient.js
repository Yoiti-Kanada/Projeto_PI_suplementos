// 1. Carregar as variáveis de ambiente do arquivo .env
require('dotenv').config();

// 2. Importar o createClient do pacote do Supabase
const { createClient } = require('@supabase/supabase-js');

// 3. Pegar a URL e a Key do nosso arquivo .env
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// 4. Criar e exportar o cliente Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;