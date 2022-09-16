const initialAdminState = {
    admin: {
        email: 'admin@example.com',
        password: 'password'
    }
}

export const AdminReducer = (state = initialAdminState,action) => {
    switch(action.type) {        
        default:
            return state
    }
}