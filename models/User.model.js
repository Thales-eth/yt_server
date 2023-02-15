const { Schema, model } = require("mongoose");
const bcrypt = require('bcryptjs')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "A username is needed!"],
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: [true, "An email is needed"],
      unique: true,
      minLength: 1,
      lowercase: true,
      trim: true,
      match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        "Choose a valid email"
      ]
    },
    password: {
      type: String,
      required: [true, "A password is needed!"],
      minLength: [1, "Password is not long enough"],
      // match: [/^(?=.*[0-9]).{8,}$/, "Password must be 8 characters long and contain at least one number"]
    },
    avatar: {
      type: String,
      default: "https://s.yimg.com/ny/api/res/1.2/3bOO.WrwLY3daaD868z.mg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ3NA--/https://media.zenfs.com/en/e__181/2917ac4ec0d5b8de096796c4e2626614"
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER"
    }
  },
  {
    timestamps: true
  }
);

userSchema.pre("save", function (next) {
  bcrypt
    .genSalt(+process.env.SALT)
    .then(salt => {
      console.log("DESDE EL MODELO Y ESTA ES LA SAL!!!!:", salt)
      let hashedPwd = bcrypt.hashSync(this.password, salt)
      this.password = hashedPwd
      next()
    })
    .catch(err => next(err))
})

userSchema.methods.comparePassword = function (plainPwd) {
  return bcrypt.compareSync(plainPwd, this.password)
}

const User = model("User", userSchema);

module.exports = User;
