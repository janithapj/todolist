import Todo from "../models/todos";

export const add = (req, res) => {

    console.log('Saving to Todos, Parameters are:'+JSON.stringify(req.body))

    const {  order,todo} = req.body;
   
    const newTodo = new Todo({
        order,todo          
    });

    let valErr = newTodo.validateSync();
    
    newTodo.save(function(err) {
        if (err) {
            res.json({ error: true, data: valErr ? valErr : err, message: "Error Occured in saving data" });
        } else {
            res.json({ error: false, data: newTodo, message: "Todo saved Succesfully" });
        }
    });
};

export const update = (req, res) => {
    console.log('updated'+JSON.stringify(req.body));
    const {order,todo } = req.body;

    const refs = {
      todo
    };

    const updates = {
       order,
       todo
    };

    Todo.update(refs, updates, function(err, id) {
        if (err) {
            return res.json({ error: true, data: err, message: "Updated" });
        } else {
            res.json({ error: false, data: id, message: "Cancelled" });
        }
    });
};


export const viewTodos = (req, res, next) => {
    const { text, page, limit, sort } = req.query;
    let aggregate = [];

    if (typeof text !== "undefined") {
        aggregate.push({
            $match: {
                $or: [
                    { todo: { $regex: text, $options: 'i' } }
                ]
            }
        });
    }

    if (typeof page !== "undefined" && typeof limit !== "undefined") {
        let skip = (page - 1) * limit;

        aggregate.push({ $skip: skip });
        aggregate.push({ $limit: parseInt(limit) });
    } else if (typeof limit !== "undefined") {

        aggregate.push({ $limit: parseInt(limit) });
    }

    if (typeof sort !== "undefined") {
        let order = sort.substring(0, 1) === '-' ? -1 : 1;
        let field = sort;

        if (field.charAt(0) === '-' || field.charAt(0) === '+') {
            field = field.substring(1);
        }

        field = field.replace(/^\s+|\s+$/g, '');

        aggregate.push({
            $sort: {
                [field]: order
            }
        });
    }

    // Default
    if (aggregate.length === 0) {
        aggregate.push({ $sort: { todo: 1 } }); // Cambia dependiendo del Modelo
    }

    Todo.aggregate(aggregate, (err, data) => {
        if (err) {
            res.json({ error: true, data: err, message: "No se pudo obtener la información" });
        }

        res.json({ error: false, data: data, message: "No hay errores" });
    });
};
