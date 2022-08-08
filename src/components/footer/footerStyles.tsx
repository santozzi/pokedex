





export const FooterStyles = () => {
    const flex = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
    return {
        footerContainer: {
            ...flex,

            backgroundColor: '#252525',
            color: 'white',
            width: '100%',
            minHeight: '8rem',
            position: 'absolute',
            bottom: '0rem'





        },

        title: {
            maxWidth: '10rem',

        },
        tituloCatContactoContainer: {
            ...flex,


            flexWrap: 'wrap'
        },
        socialMedias: {
            ...flex,
            gap: '1rem',

            "a:link": {
                color: '#ccc'
            },
            "a:visited": {
                color: '#ccc'
            },


        },
        categories: {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            gap: '2px',
            textDecoration: 'none',
            margin: 2,
            "a:link": {
                color: '#ccc'
            },
            "a:visited": {
                color: '#ccc'
            },

        }

    }
}