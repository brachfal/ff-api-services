import { APIClient, APIMapping } from '../../http';
import { WidgetLayoutTypes } from './NavigationTypes';

import PagedWidgetLayouts = WidgetLayoutTypes.PagedWidgetLayouts;
import WidgetLayout = WidgetLayoutTypes.WidgetLayout;

class WidgetLayoutsController extends APIClient {

    constructor() {
        super(APIMapping.dynamicLayoutService);
    }

    /**
     * If schemas are specified, only layouts of those schemas are returned.
     * @param schemaNames
     */
    async fetchLayouts(schemaNames: string[] = []) {
        return this.invokeApiWithErrorHandling<PagedWidgetLayouts>('/widget-layouts', 'GET', undefined, {
            queryParams: {
                schema: schemaNames.join(',')
            }
        });
    }

    /**
     * Creates a new layout for a specific schema
     * @param layout
     */
    async createLayout(layout: WidgetLayout) {
        return this.invokeApiWithErrorHandling<WidgetLayout>('/widget-layouts', 'POST', layout);
    }

    /**
     * Fetches a layout by the id
     * @param layoutId
     */
    async fetchLayout(layoutId: string) {
        return this.invokeApiWithErrorHandling<WidgetLayout>(`/widget-layouts/${layoutId}`, 'GET');
    }

    /**
     * Updates a layout by the id
     * @param layout
     */
    async updateLayout(layout: WidgetLayout) {
        return this.invokeApiWithErrorHandling<WidgetLayout>(`/widget-layouts/${layout.id}`, 'PUT', layout);
    }

    /**
     * Deletes a custom layout
     * @param layoutId
     */
    async deleteCustomLayout(layoutId: string) {
        return this.invokeApiWithErrorHandling(`/widget-layouts/${layoutId}`, 'DELETE');
    }
}

export default WidgetLayoutsController;
