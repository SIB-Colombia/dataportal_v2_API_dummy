import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
const Schema = mongoose.Schema;


const dato = new Schema({
  ancla: { type: String },
  titulo: { type: String },
  contenido: { type: String }
});

const StaticSchema = new Schema({
  nombre: { type: String },
  titulo: { type: String },
  html: { type: String },
  datos: [ dato ]
});

StaticSchema.plugin(mongoosePaginate);

export default mongoose.model('Static', StaticSchema);
