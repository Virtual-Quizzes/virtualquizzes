class SRoleService {
    static setRole(rol: string): void {
      localStorage.setItem('rol', rol);
    }
  
    static getRole(): string | null {
      return localStorage.getItem('rol');
    }
  
    static removeRole(): void {
      localStorage.removeItem('rol');
    }  
}
  
  export default SRoleService;
  