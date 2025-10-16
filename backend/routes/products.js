const express = require('express');
const router = express.Router();


const supabase = require('../supabaseClient');


router.get('/', async (req, res) => {
    try {
        
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .order('id', { ascending: true });

        
        if (error) {
           
            throw error;
        }

        
        res.json(data);

    } catch (error) {
        
        console.error('Erro ao buscar produtos do Supabase:', error.message);
        
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
});


module.exports = router;