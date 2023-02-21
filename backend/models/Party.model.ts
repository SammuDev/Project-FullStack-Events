import { Schema, Document, model } from 'mongoose';

interface TypeSchemaParty extends Document {
  title: string,
  author: string,
  description: string,
  budget: number,
  image: string
};

const partySchema = new Schema<TypeSchemaParty>({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  budget: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, {timestamps: true});

const Party = model<TypeSchemaParty>('Party', partySchema);

export default Party;
