import { Schema, Document, model } from 'mongoose';

import toServiceSchema from './Services.model';

interface TypeSchemaParty extends Document {
  title: string,
  author: string,
  description: string,
  budget: number,
  image: string,
  services: Array<string>;
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
  },
  services: {
    type: Schema.Types.ObjectId,
    ref: 'Services'
  }
}, {timestamps: true});

const Party = model<TypeSchemaParty>('Party', partySchema);

export default Party;
