const styles = {
    windowActions: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginRight: '5px',
        '& button': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 3px',
            width: '24px',
            height: '24px',
            background: '#C4C4C4',
            border: 'none',
            outline: 'none',
            borderRadius: '100%',
            boxShadow: 'none',
            cursor: 'pointer',
            '& i': {
                transform: 'translateY(1px)'
            }
        }
    }
};

export default styles;
