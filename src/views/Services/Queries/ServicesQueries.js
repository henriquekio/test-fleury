import gql from 'graphql-tag';

export const GET_ALL_SERVICES = gql`{
    allServices {
        id
        title
        subtitle
        thumbnail
        image
    }
}`;

export const GET_SERVICE_DETAIL = gql`
    query getService($id: Int!){
        service(id: $id){
            id
            title
            subtitle
            description
            about
            details
            thumbnail
            image
            secondImage
        }
    }`;
