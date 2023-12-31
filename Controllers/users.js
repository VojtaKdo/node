const User = require("../models/users");

exports.getAllUsers = async (req, res) => {
  try {
    const data = await User.find();
    if (data && data.length !== 0) {
      return res.status(200).send({
        msg: "Uživatelé byli nalezeni",
        payload: data,
      });
    }
    res.status(500).send({
      msg: "Nefunguje to omega pepega async",
    });
  } catch (error) {
    res.status(500).send({
      error,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    if (data) {
      return res.status(200).send({
        msg: "Uživatel byl nalezen",
        payload: data,
      });
    }
    res.status(500).send({
      msg: "Nefunguje to omega pepega async",
    });
  } catch (error) {
    res.status(500).send({
      error,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const data = new User({
      username: req.body.username,
      phone: req.body.phone,
      password: req.body.password,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Uživatel byl vytvořen",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Nefunguje to omega pepega async",
    });
  } catch (error) {
    res.status(500).send({
      error,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const data = {
        username: req.body.username,
        phone: req.body.phone,
        password: req.body.password,
      };
      const result = await User.findByIdAndUpdate(req.params.id, data);
      if (result) {
        return res.status(201).send({
          msg: "Uživatel byl aktualizován",
          payload: result,
        });
      }
      res.status(500).send({
        msg: "Nefunguje to omega pepega async",
      
    }) 
}
    catch (error) {
    res.status(500).send({
      error,
    });
  }
}


exports.patchUser = async (req, res) => {
  try {
    const update = {};
    for(const ops of req.body){
        update[ops.propName] = ops.value;
    }
    const result = await User.findByIdAndUpdate(req.params.id, update)
    if (result) {
        return res.status(201).send({
          msg: "Uživatelovi byla aktualizována jedna věc",
          payload: result,
        });
      }
  } catch (error) {
    res.status(500).send({
      error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const data = await User.findByIdAndDelete(req.params.id);
    if (data) {
      return res.status(200).send({
        msg: "Uživatel byl ANNIHILATED",
        payload: data,
      });
    }
    res.status(500).send({
      msg: "Nefunguje to omega pepega async",
    });
  } catch (error) {
    res.status(500).send({
      error,
    });
  }
};

