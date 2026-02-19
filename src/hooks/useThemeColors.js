export const useThemeColors = (theme) => {
  return {
    bgColor: theme === 'dark' ? '#0a0e27' : '#f8fafc',
    textColor: theme === 'dark' ? '#ffffff' : '#1e293b',
    secondaryText: theme === 'dark' ? '#a0aec0' : '#64748b',
    glassyBg: theme === 'dark' ? 'rgba(10, 14, 39, 0.7)' : 'rgba(255, 255, 255, 0.7)',
    glassBorder: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
    cardBg: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)',
  };
};