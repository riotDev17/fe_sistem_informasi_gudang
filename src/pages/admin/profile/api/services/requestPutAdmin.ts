import Swal from 'sweetalert2';
import { put } from '../api';

export const requestPutAdmin = async (id_admin: string, data: any) => {
  try {
    const alert = await Swal.fire({
      icon: 'warning',
      title: 'Apakah anda yakin?',
      text: 'Ingin mengupdate profile?',
      showCancelButton: true,
      confirmButtonText: 'Update',
      padding: '2em',
      customClass: 'sweet-alerts',
    });

    if (alert.isConfirmed) {
      const response = await put(id_admin, data);
      if (response.status === 200) {
        const toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
        });
        toast.fire({
          icon: 'success',
          title: `Profil Berhasil Diedit`,
          padding: '10px 20px',
        });

        return true;
      }
    }
  } catch (error) {
    console.log(error);
    const toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
    });
    toast.fire({
      icon: 'error',
      title: 'Profil Gagal Diedit',
      padding: '10px 20px',
    });

    return false;
  }
};
