import { Schema, Document, model } from 'mongoose';

type TypeSchemaServices = Document & {
  name: string,
  description: string,
  price: number,
  image: string
};

const serviceSchema = new Schema<TypeSchemaServices>({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const Service = model<TypeSchemaServices>('Service', serviceSchema);

export default Service;
