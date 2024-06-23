document.addEventListener("DOMContentLoaded", function() {
  const megaMenu = [
    { 
      intMenudId: 1,
      title: 'Home',
      intParentMenuId: null,
      strChildMenu: [],
      ysnLeaf: true,
      ysnExpanded: false,
      link: '/'  
    },
    { 
      intMenudId: 2,
      title: 'Electronics',
      intParentMenuId: null,
      strChildMenu: [
        { link: '/electronics/phones', title: 'Phones', intParentMenuId: 2},
        { link: '/electronics/laptops', title: 'Laptops', intParentMenuId: 2},
        { link: '/electronics/accessories', title: 'Accessories', intParentMenuId: 2}
      ],
      ysnLeaf: false,
      ysnExpanded: false
    },
    { 
      intMenudId: 3,
      title: 'Fashion',
      intParentMenuId: null,
      strChildMenu: [
        { link: '/fashion/men', title: 'Men', intParentMenuId: 3 },
        { link: '/fashion/women', title: 'Women', intParentMenuId: 3 },
        { link: '/fashion/kids', title: 'Kids', intParentMenuId: 3 }
      ],
      ysnLeaf: false,
      ysnExpanded: false
    },
    { 
      intMenudId: 4,
      title: 'Home & Garden',
      intParentMenuId: null,
      strChildMenu: [
        { link: '/home-garden/furniture', title: 'Furniture', intParentMenuId: 4 },
        { link: '/home-garden/kitchen', title: 'Kitchen', intParentMenuId: 4 },
        { link: '/home-garden/decor', title: 'Decor', intParentMenuId: 4 }
      ],
      ysnLeaf: false,
      ysnExpanded: false
    },
    { 
      intMenudId: 5,
      title: 'Contact',
      intParentMenuId: null,
      strChildMenu: [],
      ysnLeaf: true,
      ysnExpanded: false,
      link: '/contact'  
    },
    { 
      intMenudId: 6,
      title: 'Test no Sub Menu Added',
      intParentMenuId: null,
      strChildMenu: [],
      ysnLeaf: true,
      ysnExpanded: false,
      link: '/test-no-submenu'  
    },
    { 
      intMenudId: 7,
      title: 'Test Menu with SubMenu',
      intParentMenuId: null,
      strChildMenu: [
        { link: '/home-garden/furniture', title: 'Test1', intParentMenuId: 7 },
        { link: '/home-garden/kitchen', title: 'Test2', intParentMenuId: 7 },
        { link: '/home-garden/decor', title: 'Test3', intParentMenuId: 7 }
      ],
      ysnLeaf: false,
      ysnExpanded: false
    },
  ];

  // Function to render mega menu
  function renderMegaMenu(menuData) {
    const navItemsContainer = document.querySelector('.js-mega-nav__items');

    menuData.forEach(item => {
      const listItem = document.createElement('li');
      listItem.className = 'mega-nav__item js-mega-nav__item';

      if (item.ysnLeaf) {
        //leaf nodes
        const link = document.createElement('a');
        link.href = item.link; 
        link.className = 'mega-nav__control js-mega-nav__control';
        link.innerHTML = `<i class="mega-nav_arrow-icon" aria-hidden="true"></i>${item.title}`;
        listItem.appendChild(link);
      } else {
        //non-leaf nodes
        const button = document.createElement('button');
        button.className = 'mega-nav__control js-mega-nav__control';
        button.innerHTML = `<i class="mega-nav_arrow-icon" aria-hidden="true"></i>${item.title}`;
        button.setAttribute('aria-expanded', `${item.ysnExpanded}`);
        listItem.appendChild(button);

        const subNavWrapper = document.createElement('div');
        subNavWrapper.className = 'mega-nav__sub-nav-wrapper';
        subNavWrapper.id = `wrapperId${item.intMenudId}`;

        const subNav = document.createElement('div');
        subNav.className = 'mega-nav__sub-nav mega-nav__sub-nav--layout-1 grid-12 gap-lg';

        const subItems = document.createElement('ul');
        subItems.className = 'mega-nav__sub-items col-span-3 mega-nav__tabs-controls';

        item.strChildMenu.forEach((subItem, index) => {
          const subListItem = document.createElement('li');
          subListItem.className = 'mega-nav__sub-item';
          subListItem.setAttribute('role', 'presentation');

          const subLink = document.createElement('a');
          subLink.href = subItem.link;
          subLink.className = 'mega-nav__tabs-control js-tabs__trigger';
          subLink.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
          subLink.setAttribute('role', 'tab');
          subLink.setAttribute('aria-controls', `tabProduct${index}`);
          subLink.tabIndex = 0;
          subLink.textContent = subItem.title;

          subListItem.appendChild(subLink);
          subItems.appendChild(subListItem);
        });

        const tabs = document.createElement('div');
        tabs.className = 'js-tabs tabs--no-interaction col-span-9';
        tabs.setAttribute('data-tabs-layout', 'vertical');

        const panels = document.createElement('div');
        panels.className = 'js-tabs__panels';

        item.strChildMenu.forEach((subItem, index) => {
          const panel = document.createElement('section');
          panel.id = `tabProduct${index}`;
          panel.className = 'mega-nav__tabs-panel js-tabs__panel';
          panel.setAttribute('role', 'tabpanel');
          panel.setAttribute('aria-labelledby', `tab-tabProduct${index}`);
          panel.setAttribute('hidden', index !== 0 ? 'true' : 'false');

          const panelLink = document.createElement('a');
          panelLink.href = '#0';
          panelLink.className = 'mega-nav__tabs-img margin-bottom-md';

          const panelImg = document.createElement('img');
          panelImg.src = '#';
          panelImg.className = 'width-100%';
          panelImg.alt = 'Image description';

          panelLink.appendChild(panelImg);

          const textComponent = document.createElement('div');
          textComponent.className = 'text-component';

          const h1 = document.createElement('h1');
          h1.className = 'text-xl';
          h1.textContent = `${subItem.title} Product`;

          const p = document.createElement('p');
          p.className = 'color-contrast-medium';
          p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quaerat.';

          const flexP = document.createElement('p');
          flexP.className = 'flex gap-2xs';

          const subtleBtn = document.createElement('a');
          subtleBtn.href = '#0';
          subtleBtn.className = 'btn btn--subtle';
          subtleBtn.textContent = 'Go to shop';

          const primaryBtn = document.createElement('a');
          primaryBtn.href = '#0';
          primaryBtn.className = 'btn btn--primary';
          primaryBtn.textContent = 'Buy';

          flexP.appendChild(subtleBtn);
          flexP.appendChild(primaryBtn);

          textComponent.appendChild(h1);
          textComponent.appendChild(p);
          textComponent.appendChild(flexP);

          panel.appendChild(panelLink);
          panel.appendChild(textComponent);

          panels.appendChild(panel);
        });

        tabs.appendChild(panels);
        subNav.appendChild(subItems);
        subNav.appendChild(tabs);
        subNavWrapper.appendChild(subNav);
        listItem.appendChild(subNavWrapper);
      }

      navItemsContainer.appendChild(listItem);
    });
  }

  // Render the mega menu
  renderMegaMenu(megaMenu);

  // Mega navigation control functionality
  const megaNavCtrl = document.querySelectorAll('.mega-nav__control, .mega-nav__arrow-icon');

  megaNavCtrl.forEach((ctrl) => {
    ctrl.addEventListener('click', (e) => {
      e.stopPropagation();
      const isLeaf = ctrl.closest('.js-mega-nav__item').querySelector('.mega-nav__control').getAttribute('is-leaf');
      const isExpanded = ctrl.getAttribute('aria-expanded') === 'true';
      ctrl.setAttribute('aria-expanded', String(!isExpanded)); // Toggle aria-expanded attribute

      const megaNavItem = ctrl.closest('.js-mega-nav__item');
      const subNavWrapper = megaNavItem.querySelector('.mega-nav__sub-nav-wrapper');

      // Close other open items
      document.querySelectorAll('.js-mega-nav__item').forEach(item => {
        if (item !== megaNavItem) {
          const otherCtrl = item.querySelector('.mega-nav__control');
          const wrapper = item.querySelector('.mega-nav__sub-nav-wrapper');
          if (wrapper) {
            wrapper.style.display = 'none';
            otherCtrl.setAttribute('aria-expanded', 'false');
            item.classList.remove('mega-nav__item--expanded');
          }
        }
      });

      // Toggle current item
      if (!isExpanded && isLeaf !== 'true') {
        megaNavItem.classList.add('mega-nav__item--expanded');
        subNavWrapper.style.display = 'block';
      } else {
        if (isLeaf !== 'true') {
          megaNavItem.classList.remove('mega-nav__item--expanded');
          subNavWrapper.style.display = 'none';
        }
      }
    });
  });

  // Tab functionality
  const tabTriggers = document.querySelectorAll(".js-tabs__trigger");
  const tabPanels = document.querySelectorAll(".js-tabs__panel");

  tabTriggers.forEach(trigger => {
    trigger.addEventListener("click", function(event) {
      event.preventDefault();

      const targetPanelId = this.getAttribute("aria-controls");

      tabTriggers.forEach(tab => {
        tab.setAttribute("aria-selected", "false");
      });

      this.setAttribute("aria-selected", "true");

      tabPanels.forEach((panel, panelIndex) => {
        const panelId = panel.getAttribute("id");
        if (panelId === targetPanelId) {
          panel.removeAttribute("hidden");
          panel.classList.remove('hide');
        } else {
          panel.classList.add('hide');
        }
      });
    });
  });
});







// function render(megaMenu) {

//     // Create Skip to Content link
//     // const skipToContentLink = document.createElement('a');
//     // skipToContentLink.href = '#main-content';
//     // skipToContentLink.textContent = 'Skip to Content';
//     // skipToContentLink.classList.add('skip-to-content');
  
//     // // Create nav element
//     // const navEl = document.createElement('nav');
//     // navEl.setAttribute('aria-label', 'Main navigation');
//     const navEl = document.querySelector('.nav-cotaniner');
  
//     // Create ul element for navbar-nav
//     const ulEl = document.createElement('ul');
//     ulEl.classList.add('navbar-nav');
  
//     // Add Skip to Content link to nav element
//     // navEl.appendChild(skipToContentLink);
  
//     // Function to create a submenu ul element
  
  
//     // Function to toggle submenu visibility
   
  
//     // Event listener for button clicks to toggle submenu
   
  
//     // Event listener for keyboard interaction (Enter or Space key) on buttons
   
  
//     // Event listener to close menus if clicking outside

  
//     // Add event listeners
//     // ulEl.addEventListener('click', handleButtonClick);
//     // ulEl.addEventListener('keydown', function(event) {
//     //   if (event.key === 'Enter' || event.key === ' ') {
//     //     event.preventDefault();
//     //     toggleSubmenu(event.target);
//     //   }
//     // });
  
//     // document.addEventListener('click', handleCloseMenus);
  
//     // Iterate over megaMenu and create navigation items
//     megaMenu.forEach(menuItem => {
//       const li = document.createElement('li');
//       if (menuItem.strChildMenu.length > 0) {
//         const button = document.createElement('button');
//         button.textContent = menuItem.strParentMenu.title;
//         button.setAttribute('aria-expanded', 'false');
//         button.setAttribute('aria-haspopup', 'true');
//         button.setAttribute('aria-controls', `${menuItem.strParentMenu.title.toLowerCase().replace(/\s+/g, '-')}-submenu`);
//         li.appendChild(button);
  
//         const submenu = createSubmenu(menuItem.strChildMenu);
//         submenu.id = `${menuItem.strParentMenu.title.toLowerCase().replace(/\s+/g, '-')}-submenu`;
//         li.appendChild(submenu);
//       } else {
//         const link = document.createElement('a');
//         link.href = '/';
//         link.textContent = menuItem.strParentMenu.title;
//         li.appendChild(link);
//       }
//       ulEl.appendChild(li);
//     });
  
//     // Append ulEl to navEl
//     navEl.appendChild(ulEl);
  
//     // Append navEl to document body or any container
//     document.body.appendChild(navEl);
//   };


//   function createSubmenu(items) {
//     const submenuUl = document.createElement('ul');
//     submenuUl.classList.add('submenu');
    
//     items.forEach(submenuItem => {

//       const submenuLi = document.createElement('li');
//       const submenuLink = document.createElement('a');
//       submenuLink.href = submenuItem.link;
//       submenuLink.textContent = submenuItem.title;
//       submenuLi.appendChild(submenuLink);
//       submenuUl.appendChild(submenuLi);
//     });

//     return submenuUl;
//   }

//   function toggleSubmenu(button) {
//     const expanded = button.getAttribute('aria-expanded') === 'true' || false;
//     button.setAttribute('aria-expanded', !expanded);
//   }

//   function handleButtonClick(event) {
//     const button = event.target.closest('button');
//     if (button) {
//       toggleSubmenu(button);
//     }
//   }

//   function handleButtonKeydown(event) {
//     if (event.key === 'Enter' || event.key === ' ') {
//       event.preventDefault();
//       toggleSubmenu(event.target);
//     }
//   }

//   function handleCloseMenus(event) {
//     const isClickInsideNav = event.target.closest('nav');
//     if (!isClickInsideNav) {
//       buttons.forEach(button => button.setAttribute('aria-expanded', 'false'));
//     }
//   }

//   render(megaMenu);

// const render = "Render Test!"

// const pEl = document.querySelector('.nav-cotaniner p')
// function render(megaMenu) {
//     const navEl = document.querySelector('.nav-cotaniner');
  
//     // Create ul element for navbar-nav
//     const ulEl = document.createElement('ul');
//     ulEl.classList.add('navbar-nav');
  
//     // Iterate over megaMenu and create navigation items
//     megaMenu.forEach(menuItem => {
//       const li = document.createElement('li');
//       if (menuItem.strChildMenu.length > 0) {
//         const button = document.createElement('button');
//         button.textContent = menuItem.strParentMenu.title;
//         button.setAttribute('aria-expanded', 'false');
//         button.setAttribute('aria-haspopup', 'true');
//         button.setAttribute('aria-controls', `${menuItem.strParentMenu.title.toLowerCase().replace(/\s+/g, '-')}-submenu`);
//         li.appendChild(button);
  
//         const submenu = createSubmenu(menuItem.strChildMenu);
//         submenu.id = `${menuItem.strParentMenu.title.toLowerCase().replace(/\s+/g, '-')}-submenu`;
//         li.appendChild(submenu);
//       } else {
//         const link = document.createElement('a');
//         link.href = '/';
//         link.textContent = menuItem.strParentMenu.title;
//         li.appendChild(link);
//       }
//       ulEl.appendChild(li);
//     });
  
//     // Append ulEl to navEl
//     navEl.appendChild(ulEl);
  
//   };

//   function createSubmenu(items) {
//     const submenuUl = document.createElement('ul');
//     submenuUl.classList.add('submenu');
//     const submenuRow = document.createElement('div')
//     submenuRow.classList.add('submenu-row');
//     const submenuColumn = document.createElement('div');
//     submenuColumn.classList.add('submenu-cols');

//     submenuUl.appendChild(submenuRow);
//     submenuRow.appendChild(submenuColumn);
    
//     items.forEach(submenuItem => {

//       const submenuLi = document.createElement('li');
//       const submenuLink = document.createElement('a');
//       submenuLink.href = submenuItem.link;
//       submenuLink.textContent = submenuItem.title;
//       submenuLi.appendChild(submenuLink);
//       submenuColumn.appendChild(submenuLi);
//     });

//     return submenuUl;
//   }
//   render(megaMenu);



// document.addEventListener('DOMContentLoaded', function() {
//     const buttons = document.querySelectorAll('.navbar-nav button');
  
//     buttons.forEach(button => {
//       button.addEventListener('click', function() {
//         const expanded = this.getAttribute('aria-expanded') === 'true' || false;
//         this.setAttribute('aria-expanded', !expanded);
//       });
  
//       button.addEventListener('keydown', function(event) {
//         if (event.key === 'Enter' || event.key === ' ') {
//           event.preventDefault();
//           const expanded = this.getAttribute('aria-expanded') === 'true' || false;
//           this.setAttribute('aria-expanded', !expanded);
//         }
//       });
//     });
  
//     // Close menus if clicking outside
//     document.addEventListener('click', function(event) {
//       const isClickInside = event.target.closest('nav');
//       if (!isClickInside) {
//         buttons.forEach(button => {
//           button.setAttribute('aria-expanded', 'false');
//         });
//       }
//     });
//   });
  

// document.querySelectorAll('.menu-link').forEach(item => {
//   item.addEventListener('mouseover', event => {
//       // Hide all images
//       document.querySelectorAll('.submenu-item').forEach(img => {
//           img.classList.remove('active');
//       });
//       // Show the selected image
//       const imageId = event.currentTarget.getAttribute('data-image');
//       document.getElementById(imageId).classList.add('active');
//   });
// });



// expandNavControl();
