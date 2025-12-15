export const prefixPath = (path: string) => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/Dental-Clinic-Website';
    if (process.env.NODE_ENV === 'development') {
        return path;
    }
    return `${basePath}${path}`;
};
