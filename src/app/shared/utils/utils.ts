import Swal from 'sweetalert2';

export class Utils {

    /* Success & Failure Message */
    static alertMessage(message: string, type: string) {

        if (type == "success") {
            Swal.fire({
                icon: 'success',
                title: message,
                showConfirmButton: false,
                timer: 2000,
                padding: '3em',
            })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: message,
                showConfirmButton: false,
                timer: 2000,
                padding: '3em',
            })

        }
    }

}