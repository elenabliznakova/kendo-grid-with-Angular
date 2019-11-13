import { Component } from '@angular/core';
import { projects } from './projects';

@Component({
    selector: 'app-root',
    template: `
        <form novalidate #myForm="ngForm">
            <kendo-grid
                    [kendoGridTemplateEditing]=""
                    [kendoGridBinding]="gridData"
                    [height]="500"
                    [pageSize]="5"
                    [filterable]="true"
                    [pageable]="true">
                <ng-template kendoGridToolbarTemplate>
                    <button kendoGridAddCommand type="button">Add new</button>
                </ng-template>
                <kendo-grid-column field="title" title="Title" width="240">
                    <ng-template kendoGridEditTemplate let-dataItem="dataItem">
                        <input [(ngModel)]="dataItem.title" kendoGridFocusable name="title" class="k-textbox" required/>
                    </ng-template>
                </kendo-grid-column>
                <kendo-grid-column field="location_city" title="Location city" >
                    <ng-template kendoGridEditTemplate let-dataItem="dataItem">
                        <input [(ngModel)]="dataItem['location_city']" kendoGridFocusable name="location_city" class="k-textbox"/>
                    </ng-template>
                </kendo-grid-column>
                <kendo-grid-column field="publish_date" title="Publish date">
                    <ng-template kendoGridEditTemplate let-dataItem="dataItem">
                        <input [(ngModel)]="dataItem['publish_date']" kendoGridFocusable name="publish_date" class="k-textbox"/>
                    </ng-template>
                </kendo-grid-column>
                <kendo-grid-column field="comments" editor="numeric" title="Comments">
                    <ng-template kendoGridEditTemplate let-dataItem="dataItem">
                        <input [(ngModel)]="dataItem.comments" kendoGridFocusable name="comments" class="k-textbox"/>
                    </ng-template>
                </kendo-grid-column>
                <kendo-grid-command-column title="command" width="220">
                    <ng-template kendoGridCellTemplate let-isNew="isNew">
                        <button kendoGridEditCommand type="button" [primary]="true">Edit</button>
                        <button kendoGridRemoveCommand type="button">Remove</button>
                        <button kendoGridSaveCommand type="button" [disabled]="myForm.invalid">{{ isNew ? 'Add' : 'Update' }}</button>
                        <button kendoGridCancelCommand type="button">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>
                    </ng-template>
                </kendo-grid-command-column>
            </kendo-grid>
        </form>
    `
})
export class AppComponent {
    public gridData: any[] = projects;
}
