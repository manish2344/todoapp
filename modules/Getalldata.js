const Todolist = require("../DB/schema");
exports.Getalldata = async (req, res) => {
  try {
    const createdata = await Todolist.find({}).sort({ createdAt: -1 });;
    res.send(createdata);
  }catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// exports.getAllTodos = async (req, res) => {
//   try {
//     const todos = await Todo.find({}).sort({ createdAt: -1 });

//     try {
//       res.status(200).json({
//         message: "Get all todos successfully.",
//         todos: todos,
//       });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };