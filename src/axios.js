// axios에서 기본 설정
import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3000/'
});