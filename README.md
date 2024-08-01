# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

export function filterRoutes (routes=[], permission=[]) {
  return routes.filter(route=>{
    if(route.path && permission.includes(route.path)){
      return true
    }
  }).map(route => {
    if(route.children) {
      route.children = filterRoutes(route.children, permission)
    }
    return route
  })
}

export function createMenus(routes=[]) {
  return routes.map(route=> {
    if(route.children) {
      return {
        path: route.path,
        name: route.name,
        children: createMenus(route.children),
        ...rest
      }
    }
    return {
      path: route.path,
      name: route.name,
      ...rest
    }
  })
}

const handleCheckChange = (data, checked) => {
      if (checked) {
        selectChildren(data);
      } else {
        deselectChildren(data);
      }
    };

    const selectChildren = (node) => {
      if (node.children) {
        node.children.forEach(child => {
          tree.value.setChecked(child.id, true);
          selectChildren(child);
        });
      }
    };

    const deselectChildren = (node) => {
      if (node.children) {
        node.children.forEach(child => {
          tree.value.setChecked(child.id, false);
          deselectChildren(child);
        });
      }
    };
