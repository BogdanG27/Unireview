import { ApolloServer } from "apollo-server-express";
import { resolvers } from './apollo/resolvers';
import { typeDefs } from './apollo/typeDefs';
import express from "express";
import mongoose from "mongoose";
import { PORT } from "./constants";

const app = express();
mongoose.connect("mongodb://localhost:27017/test3", { useNewUrlParser: true });

const {
	ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
	typeDefs,
	resolvers,
	csrfPrevention: true,
	cache: 'bounded',

	plugins: [
		ApolloServerPluginLandingPageLocalDefault({ embed: true }),
	],
});

server.applyMiddleware({ app });

app.listen({ PORT }, () => console.log(`🚀  Server open on ${PORT}`));
