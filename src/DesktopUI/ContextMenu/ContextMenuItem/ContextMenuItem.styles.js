const styles = {
    contextMenuOption: {
        width: '125px',
        padding: '8px 5px',
        fontSize: '12px',
        cursor: 'pointer',
        '& > ul': {
            display: 'none'
        },
        '&:hover': {
            background: '#D8D8D8',
            '& > ul': {
                display: 'block'
            }
        }
    },
    subOption: {
        '&:hover': {
            background: '#C4C4C4'
        }
    }
};

export default styles;
