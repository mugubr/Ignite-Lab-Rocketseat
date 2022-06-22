import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4psz06t2btx01xs14l3gtms/master',
    cache: new InMemoryCache()
})

