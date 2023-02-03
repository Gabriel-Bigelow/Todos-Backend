const supabase = require('./database');

const create = async (description) => {
    const { error } = await supabase.from('todos').insert({ description: description})

    return error;
};

const get = async () => {
    const { data } = await supabase.from('todos').select();

    return data;
};

const remove = async (id) => {
    const { error } = await supabase.from('todos').delete().eq('id', id);

    return error;
};

module.exports = {
    create,
    get,
    remove
}
