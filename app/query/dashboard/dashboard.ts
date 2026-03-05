import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

export const useUploadExcelFile = () => {
    return useMutation({
        mutationFn: ({ file }: { file: File;}) => {
            const formData = new FormData();
            formData.append('file', file);

            return axios.post('/api/analyze', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
        },
    });
};
