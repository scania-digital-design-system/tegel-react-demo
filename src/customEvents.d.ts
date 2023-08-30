interface TdsCloseEvent extends Event {
  detail: {
    bannerId: string;
    toastId: string;
  };
}

interface TdsShowEvent extends Event {
  detail: {
    bannerId: string;
  };
}

interface TdsClickEvent extends Event {
  detail: {
    cardId: string;
    chipId: string;
  };
}

interface TdsSelectEvent extends Event {
  detail: {
    selected: boolean;
    value: string;
    tableId: string;
    checked: boolean;
    selectedRows: any[];
  };
}

interface TdsCollapseEvent extends Event {
  detail: {
    collapsed: boolean;
  };
}

interface TdsFilterEvent extends Event {
  detail: {
    tableId: string;
    query: string;
  };
}

interface TdsPaginationEvent extends Event {
  detail: {
    tableId: string;
    paginationValue: number;
  };
}

interface TdsSortEvent extends Event {
  detail: {
    tableId: string;
    columnKey: string;
    sortingDirection: 'asc' | 'desc';
  };
}

interface TdsToggleEvent extends Event {
  detail: {
    checked: boolean;
    expanded: boolean;
  };
}

interface TdsChangeEvent extends Event {
  detail: {
    chipId: string;
    value: string;
    checkboxId: string;
    checked: boolean;
    value?: string;
    selectedTabIndex: number;
    radioId: string;
  };
}

interface TdsInputEvent extends InputEvent {}

interface TdsFocusEvent extends FocusEvent {}

interface TdsBlurEvent extends FocusEvent {}

interface HTMLElementEventMap {
  tdsClick: TdsClickEvent;
  tdsShow: TdsShowEvent;
  tdsSelect: TdsSelectEvent;
  tdsSelectAll: TdsSelectEvent;
  tdsClose: TdsCloseEvent;
  tdsCollapse: TdsCollapseEvent;
  tdsFilter: TdsFilterEvent;
  tdsPageChange: TdsPaginationEvent;
  tdsSort: TdsSortEvent;
  tdsToggle: TdsToggleEvent;
  tdsInput: TdsInputEvent;
  tdsFocus: TdsFocusEvent;
  tdsChange: TdsChangeEvent;
}
