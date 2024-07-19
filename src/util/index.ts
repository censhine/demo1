export const LoginService = ({userName, password}) => {
    console.log(userName, password)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1)
            const res = {
                code: 200,
                data: {
                    userInfo: {
                        userName,
                        password
                    },
                    menuList: [
                        {id:1, menuKeys: 'home'},
                        {id:2, menuKeys: 'about'},
                        {id:3, menuKeys: 'about-us'}
                    ]
                }
            }
            console.log(res)
            resolve(res)
        }, 2000);
    })
}
