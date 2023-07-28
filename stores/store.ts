import HomeIcon from '@/icons/HomeIcon.vue';
import BranchIcon from '@/icons/BranchIcon.vue';
import SettingIcon from '@/icons/SettingIcon.vue';
import ImageIcon from '@/icons/ImageIcon.vue';
import CheckListIcon from '@/icons/CheckListIcon.vue';

export const rightSpace = ref(null);

export const mainMenus = [
  { name: "Dashboard", href: "#", icon: HomeIcon, route: "index" },
  { name: "Tasks", href: "#", icon: CheckListIcon, route: "tasks" },
  { name: "Timeline", href: "#", icon: BranchIcon, route: "timeline" },
  { name: "Moments", href: "#", icon: ImageIcon, route: "moments" },
  { name: "Setting", href: "#", icon: SettingIcon, route: "setting" },
];

export const ghostMenus = [
  { id: 1, name: 'Tasks', href: '#', initial: 'T', current: false },
  { id: 2, name: 'Templates', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Spotify', href: '#', initial: 'S', current: false },
];