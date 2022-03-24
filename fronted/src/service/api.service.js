import http from "/fronted/src/http-common";

class JimmapService {

    LoginUser(data){
        console.log(data)
        return http.post(`login/signin`,data);
    }
    Signin(data){
        return http.post(`user/signin`,data)
    }
    getUser(id){
        return http.get(`/user/${id}`);
    }
    createUser(data){
        console.log("create user")
        return http.post(`/user`, data)
    }
    updateUser(id,data){
        return http.put(`user/${id}`, data)
    }
    deleteUser(id) {
        return http.delete(`/user/${id}`);
      }
    
    getImage(id){
        return http.get(`/api/${id}`);
    }
    createImage(data){
        return http.post(`/api`, data)
    }
    updateImage(id,data){
        return http.put(`api/${id}`, data)
    }
    deleteImage(id) {
        return http.delete(`/api/${id}`);
      }
}

export default new JimmapService();