export const sxStyles = {
    appBar: {
        background: 'transparent',
        boxShadow: 'none'
    },
    toolBar: {
        display: 'flex'
    },
    logoLink: {
        display: 'flex',
        alignItems: 'center'
    },
    logoContainer: {
        border: '2px solid var(--yellow)',
        background: 'var(--color-primary)',
        borderRadius: '50%',
        outline: '2px solid var(--color-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4px 6px 6px 6px',
        '& img': {
            marginTop: '-10px',
            height: '48px'
        }
    },
    logoText: {
        paddingLeft: '6px',
        '& *':
            {
                color: 'var(--color-primary)',
                fontWeight: 'bolder',
                underline: 'true'
            }
    },
    cartBox: {
        flexGrow:'1',
        display: 'flex',
        justifyContent: 'flex-end'
    }
}