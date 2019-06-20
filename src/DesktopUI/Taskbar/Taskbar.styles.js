const styles = {
    taskbar: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '65px',
        background: '#C4C4C4'
    },
    task: {
        display: 'flex',
        justifyContent: ' center',
        alignItems: 'center',
        position: 'relative',
        width: '65px',
        height: '65px',
        '&:after, &:before': {
            content: '""',
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            height: '4px',
            width: '55px',
            maxWidth: '0',
            borderTopRightRadius: '4px',
            borderTopLeftRadius: '4px',
            transition: 'all 250ms'
        },
        '&:after': {
            transition: 'all 450ms'
        },
        '&:hover::before, &.minimized::before': {
            background: '#848484',
            maxWidth: '55px'
        },
        '&.open::after': {
            background: '#0F9AE8',
            maxWidth: '55px'
        },
        '&.minimized::after': {
            maxWidth: '0'
        }
    }
};

export default styles;
