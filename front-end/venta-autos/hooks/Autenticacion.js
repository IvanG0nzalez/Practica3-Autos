import { enviar} from "./Conexion";
import { save, saveToken } from "./SessionUtil";
export async function inicio_sesion(data) {
    const sesion = await enviar("inicio-sesion", data);
    if (sesion && sesion.code === 200) {
        saveToken(sesion.data.token);
        save('usuario', sesion.data.user);
        save('external_id', sesion.data.external_id);
        save('rol', sesion.data.rol);
    }
    return sesion;
}
